<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\TempImage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::latest()->paginate(10);

        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->merge([
            'slug' => Str::slug($request->slug)
        ]);

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:services,slug'
        ], [
            'slug.unique' => 'Slug already exists. Please choose another.'
        ]);


        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $service = Service::create($request->all());

        /*
       =====================
       IMAGE SAVE
       =====================
       */

        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);

            if ($tempImage) {

                $sourcePath = public_path('uploads/temp/' . $tempImage->image);
                if (!file_exists($sourcePath)) {
                    return response()->json([
                        'status' => false,
                        'message' => 'File not found: ' . $sourcePath
                    ]);
                }

                try {

                    $ext = pathinfo($tempImage->image, PATHINFO_EXTENSION);
                    $fileName = time() . '' . $service->id . '.' . $ext;

                    $manager = new ImageManager(new Driver());

                    // small
                    $image = $manager->read($sourcePath);
                    $image->coverDown(500, 600);
                    $image->save(public_path('uploads/services/small/' . $fileName));

                    // large
                    $image = $manager->read($sourcePath);
                    $image->scaleDown(1200);
                    $image->save(public_path('uploads/services/large/' . $fileName));

                    // save image name in DB
                    $service->image = $fileName;
                    $service->save();

                } catch (\Exception $e) {
                    return response()->json([
                        'status' => false,
                        'error' => $e->getMessage()
                    ]);
                }
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Service Added Successfully'
        ]);
    }

    public function show($id)
    {
        $Service = Service::find($id);
        if ($Service == null) {
            return response()->json([
                'status' => false,
                'message' => 'Service not Found'
            ]);
        }
        return response()->json([
            'status' => true,
            'data' => $Service
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service not Found'
            ]);
        }

        // slug generate


        $validator = Validator::make($request->all(), [
            'title' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        // update basic data
        $service->update([
            'title' => $request->title,
            'slug' => $request->slug,
            'short_desc' => $request->short_desc,
            'content' => $request->content,
            'status' => $request->status
        ]);

        /*
        =====================
        IMAGE SAVE
        =====================
        */

        if (!empty($request->imageId)) {
            $oldImage = $service->image;
            $tempImage = TempImage::find($request->imageId);

            if ($tempImage) {

                $sourcePath = public_path('uploads/temp/' . $tempImage->image);
                if (!file_exists($sourcePath)) {
                    return response()->json([
                        'status' => false,
                        'message' => 'File not found: ' . $sourcePath
                    ]);
                }

                try {

                    $ext = pathinfo($tempImage->image, PATHINFO_EXTENSION);
                    $fileName = time() . '' . $service->id . '.' . $ext;

                    $manager = new ImageManager(new Driver());

                    // small
                    $image = $manager->read($sourcePath);
                    $image->coverDown(500, 600);
                    $image->save(public_path('uploads/services/small/' . $fileName));

                    // large
                    $image = $manager->read($sourcePath);
                    $image->scaleDown(1200);
                    $image->save(public_path('uploads/services/large/' . $fileName));

                    // save image name in DB
                    $service->image = $fileName;
                    $service->save();
                    if ($oldImage != '') {
                        File::delete(public_path('uploads/services/large/' . $oldImage));
                        File::delete(public_path('uploads/services/small/' . $oldImage));
                    }
                } catch (\Exception $e) {
                    return response()->json([
                        'status' => false,
                        'error' => $e->getMessage()
                    ]);
                }
            }
        }

        return response()->json([
            'status' => true,
            'data' => $service,
            'message' => 'Service updated successfully'
        ]);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $Service = Service::find($id);
        if ($Service == null) {
            return response()->json([
                'status' => false,
                'message' => 'Service not Found'
            ]);
        }
        $Service->delete();
        return response()->json([
            'status' => true,
            'message' => 'Service delete succcesfully'
        ]);
    }
}
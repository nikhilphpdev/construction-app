<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\TempImage;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class TempImageController extends Controller
{
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'image' => 'required|mimes:png,jpg,jpeg,git|max:2048'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $uploadedImage = $request->file('image');
        $imageName = time() . '.' . $uploadedImage->getClientOriginalExtension();
        $uploadedImage->move(public_path('uploads/temp'), $imageName);
        $manager = new ImageManager(Driver::class);
        $manager->read(public_path('uploads/temp/' . $imageName))
            ->coverDown(300, 300)
            ->save(public_path('uploads/temp/thumb/' . $imageName));

        TempImage::create([
            'image' => $imageName
        ]);
        return response()->json([
            'status' => true,
            'data' => $imageName,
            'message' => 'Image  Uploaded Successfully'
        ]);
    }
}

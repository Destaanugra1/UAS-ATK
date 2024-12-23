import { NextRequest, NextResponse } from "next/server";
import { getImages } from "@/lib/data";

// GET handler
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    const images = await getImages(); // Ambil data gambar

    // Filter data berdasarkan query jika ada
    const filteredImages = query
      ? images.filter((img) =>
          img.title.toLowerCase().includes(query.toLowerCase())
        )
      : images;

    return NextResponse.json({ images: filteredImages });
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

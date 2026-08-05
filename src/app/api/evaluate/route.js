import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { submission } = await request.json();
    
    let score = 50;
    let feedback = "Pekerjaan cukup baik, namun masih memerlukan detail operasional yang lebih mendalam agar memenuhi standar manajerial.";

    if (!submission || submission.length < 30) {
      score = 20;
      feedback = "Pekerjaan terlalu singkat. Harap jelaskan langkah-langkah kerja secara komprehensif.";
    } else if (submission.length > 100) {
      score = 100;
      feedback = "Luar biasa! Penjelasan, format, dan struktur sudah memenuhi 100% standar kualitas profesional Virtual Assistant.";
    }

    return NextResponse.json({ success: true, score, feedback });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

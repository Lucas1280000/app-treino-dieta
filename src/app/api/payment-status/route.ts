import { NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('payment_status')
      .select('paid')
      .eq('id', 1)
      .single();

    if (error) {
      console.error("Erro ao buscar status:", error);
      return NextResponse.json({ paid: false }, { status: 200 });
    }

    return NextResponse.json({ paid: data?.paid || false }, { status: 200 });
  } catch (error) {
    console.error("Erro na API payment-status:", error);
    return NextResponse.json({ paid: false }, { status: 500 });
  }
}
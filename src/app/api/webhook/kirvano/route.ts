import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const payment = await request.json();

    console.log("📥 Webhook recebido da Kirvano:", payment);

    if (payment.status === "paid") {
      console.log("✅ Pagamento confirmado:", payment);

      // Verificar se as variáveis de ambiente estão configuradas
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

      if (supabaseUrl && supabaseKey) {
        // Lazy import do Supabase apenas quando necessário
        const { createClient } = await import('@supabase/supabase-js');
        const supabase = createClient(supabaseUrl, supabaseKey);

        // Atualizar status de pagamento no Supabase
        const { error } = await supabase
          .from('payment_status')
          .update({ paid: true, updated_at: new Date().toISOString() })
          .eq('id', 1);

        if (error) {
          console.error("❌ Erro ao atualizar status no Supabase:", error);
          return NextResponse.json({ error: "Erro ao atualizar status" }, { status: 500 });
        }

        console.log("🎉 Status de pagamento atualizado no banco!");
      } else {
        console.warn("⚠️ Variáveis do Supabase não configuradas. Webhook recebido mas não processado.");
      }
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Erro ao processar webhook:", error);
    return NextResponse.json(
      { error: "Erro ao processar webhook" },
      { status: 500 }
    );
  }
}

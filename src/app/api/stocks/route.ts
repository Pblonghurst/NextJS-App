// app/api/stocks/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const symbols = searchParams.get("symbols")?.split(",");

    if (!symbols?.length) {
        return NextResponse.json({ error: "Missing symbols" }, { status: 400 });
    }

    const results = await Promise.all(
        symbols.map(async (symbol) => {
            const res = await fetch(
                `https://api.polygon.io/v2/aggs/ticker/${symbol}/prev?apiKey=${process.env.POLYGON_API_KEY}`,
                { cache: "no-store" }
            );

            const data = await res.json();
            const r = data.results?.[0];

            if (!r) return null;

            return {
                symbol,
                price: r.c,
                change: ((r.c - r.o) / r.o) * 100,
            };
        })
    );

    return NextResponse.json(
        results.filter(Boolean)
    );
}

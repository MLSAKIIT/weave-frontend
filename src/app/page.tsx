import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold text-center sm:text-5xl">
          Welcome to <span className="text-orange-600">Weave</span>
        </h1>

        <Button>Get started</Button>
      </main>
    </div>
  );
}

import * as React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background mt-20">
      <div className="container mx-auto flex h-20 items-center justify-center px-4 sm:px-8 max-w-[1440px]">
        <p className="text-sm text-text-muted">
          © {currentYear} Leonam Santana. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

import "./globals.css";

export const metadata = {
    title: "Gamebald",
    description: "O melhor site de repositórios de jogos do Brasil!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    );
}

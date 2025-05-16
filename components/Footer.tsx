// File: components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-card text-accent py-6 mt-auto text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Lyons Lawn Care LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}

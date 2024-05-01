import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <Navbar />
      <main className="flex-1 bg-[url('/assets/background.jpg')] bg-cover ">{children}</main>
    </div>
  );
}

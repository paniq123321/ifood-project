import { RegisterForm } from '@/components/register-form';
import Image from 'next/image';
import RightSide from '@/images/loginFood.jpg';
import Link from "next/link";


export default function SignUpPage() {
  return (
    <main className="grid 1225:grid-cols-2 min-h-screen">
      <section
        className="hidden 1225:block bg-cover bg-center"
        style={{backgroundImage: `url(${RightSide.src})`}}
      ></section>
      <section
        className={`relative flex flex-col gap-4 p-12 justify-center items-center`}
      >
        <Link href="/" className="absolute top-4 left-8">
          logo
        </Link>
        <h2 className="text-center text-3xl font-bold text-primary">Register</h2>
        <RegisterForm/>
      </section>
    </main>
  );
}
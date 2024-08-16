import { LoginForm } from '@/components/login-form';
import Image from 'next/image';
import RightSide from '@/images/loginFood.jpg';
import Link from "next/link";


export default function SignInPage() {
  return (
    <main className="grid 1225:grid-cols-2 min-h-screen">
      <section
        className={`relative flex flex-col gap-4 p-12 justify-center items-center`}
      >
        <Link href="/" className="absolute top-4 left-8">
          logo
        </Link>
        <h2 className="text-center text-3xl font-bold text-primary">Login</h2>
        <LoginForm />
        <div className="flex justify-between w-full max-w-[40rem] font-light text-[.8rem]">
          <button>
            <Link href='/'>I don`t have an account yet</Link>
          </button>
          <button>
            <Link href="#">I forgot my password</Link>
          </button>
        </div>
      </section>
      <section
        className="hidden 1225:block bg-cover bg-center"
        style={{backgroundImage: `url(${RightSide.src})`}}
      ></section>
    </main>
  );
}
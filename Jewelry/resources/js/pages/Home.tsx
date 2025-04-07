import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import {} from "@/components/ui/navigation-menu";
import { Navigation } from 'lucide-react';
export default function Home() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
        <Navigation className="absolute top-4 right-4" />
        Hola 
        NUmero
            <Head title="Hola" />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold">Bienvenido, {auth?.user?.name || 'Usuario'}</h1>
                <p className="mt-2 text-gray-600">Este es el inicio de tu aplicación.</p>
                <nav className="mt-4">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/dashboard" className="text-blue-500 hover:underline">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile" className="text-blue-500 hover:underline">
                                Perfil
                            </Link>
                        </li>
                        <li>
                            <Link href="/logout" className="text-blue-500 hover:underline">
                                Cerrar sesión
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
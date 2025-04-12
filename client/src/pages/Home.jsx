export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Welcome to MediCore Hospital
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-xl">
        MediCore is a smart hospital management system that allows patients,
        doctors, finance, pharmacy, and emergency ward staff to collaborate
        efficiently. Use the navigation bar to log in, register, or access
        department-specific panels.
      </p>
    </div>
  );
}

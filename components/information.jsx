import Image from "next/image";

export default function Informtion() {
  return (
    <>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          src="/moi.jpg"
          width={200} // Augmenter la largeur de l'image, par exemple 200
          height={300} // Augmenter la hauteur de l'image, par exemple 300
          className="rounded-full mx-auto"
          alt="Picture of the author"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Petit soucis de pour pousser les info dans la base de données,
              ceci arrive imminament, merci de patientez, ce sera régler dans la
              journée ou demain”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Pierre Gibrenne
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Software Engineer, Pierre le boss
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

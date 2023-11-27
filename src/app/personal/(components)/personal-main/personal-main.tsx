import Image from "next/image";

export const PersonalMain = () => {
  const age = new Date().getFullYear() - 1998;
  return (
    <div>
      <div>
        <h1 className="text-x3 mb-3">Pessoal</h1>
        <p className="text-gray-400 mb-10">
          Essa página é destinada a uma apresentação informal, aqui você verá
          quem eu sou <span className="text-white">não profissionalmente</span>.
          Se isso for irrelevante, por favor ignore esta página.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-10">
        <div className="w-[180px]">
          <Image
            width={0}
            height={0}
            className="h-auto w-full rounded-full"
            sizes="100vw"
            alt="perfil image"
            src="/personal/perfil.png"
          />
        </div>
        <ul>
          <li className="text-xl">
            <p>
              Nome:{" "}
              <span className="text-gray-400 font-light">
                Henrique Gonçalves
              </span>
            </p>
            <p>
              Idade:{" "}
              <span className="text-gray-400 font-light">{age} anos</span>
            </p>
            <p>
              Curso:{" "}
              <span className="font-light text-gray-400">
                {" "}
                Análise e Desenvolvimento de Sistemas -{" "}
                {new Date().getFullYear()} Cursando
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

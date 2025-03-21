-- CreateTable
CREATE TABLE "projetos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagem" TEXT[],
    "nivel" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "destaque" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "projetos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjetoTecnologias" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjetoTecnologias_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjetoTecnologias_B_index" ON "_ProjetoTecnologias"("B");

-- AddForeignKey
ALTER TABLE "_ProjetoTecnologias" ADD CONSTRAINT "_ProjetoTecnologias_A_fkey" FOREIGN KEY ("A") REFERENCES "projetos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjetoTecnologias" ADD CONSTRAINT "_ProjetoTecnologias_B_fkey" FOREIGN KEY ("B") REFERENCES "tecnologias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

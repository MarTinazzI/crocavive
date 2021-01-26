<template>
  <div class="home">
    <SpoilerBox
        style="width: 100%;"
        title="Nível 1~20"
    >
      <div>
        <div style="display: flex; flex-flow: row; flex-wrap:wrap; justify-content: space-evenly">
          <h3
              class="mb-2"
              style="width: 100%; text-align: center;"
          >
            Incarnam
          </h3>
          <SpoilerBox
              style="max-width: 350px; background-color: #f3f4f5;"
              title="<b>Calabouço</b>: Cripta do Kardorim"
          >
            <div>
              <b>Sucesso:</b>
              <ul>
                <li>O grande explorador</li>
                <li>Serviço na milícia</li>
                <li>Profissional qualificado</li>
                <li>Confusão em Incarnam</li>
                <li>A caminho da aventura</li>
              </ul>
              <hr/>
              <b>Número de missões:</b> 25
              <hr/>
              <b>Prêmios:</b>
              <ul>
                <li>Título - "Filho / Filha de Incarnam"</li>
                <li>Conjunto de Boon</li>
              </ul>

            </div>
          </SpoilerBox>
          <div
              style="max-width: 350px;"
          >
            <p>
              Se você estiver perdido, esses guias podem ajudá-lo, seja encontrando seus itens ou respondendo às suas
              perguntas.
              <br><br>
              <a
                  href="https://www.gamosaurus.com/jeux/dofus/dofus-guides-de-stuff"
                  target="_blank"
              >Guia de Sets [FR]</a>
              <br><br>
              Você também pode aproveitar a oportunidade para aumentar suas profissões de colheita (Camponês,
              Alquimista, Lenhador, Mineiro, Caçador) para o nível 10.
              <br><br>
              Se desejar, você também pode subir nas profissões artesanais, como a profissão de ferreiro (faca de caça,
              punhais e espadas de madeira, etc.).
            </p>
          </div>
        </div>
      </div>
    </SpoilerBox>
  </div>
</template>

<script>
import SpoilerBox from "@/shared/SpoilerBox/SpoilerBox";

export default {
  name: 'Home',
  components: {SpoilerBox},
}
</script>

<style
    lang="scss"
    scoped
>
@import "src/base";

.home {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
  width: 100%;
  color: ghostwhite;
  position: relative;
  z-index: 0;
}

hr {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>

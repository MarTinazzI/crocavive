<template>
  <div class="guia-level-up">
<!--    Nível 1~20 VV-->
    <SpoilerBox
        style="width: 100%;"
        title="Nível 1~20"
    >
      <div>
        <div class="guia-level-up-level-box">
          <SpoilerBox
              title="Incarnam"
              class="guia-level-up-success-box"
          >
            <div>
              <b>Calabouço:</b>
              <ul>
                <li>Cripta do Kardorim (Nív. 10) [5,-1]</li>
              </ul>
              <hr>
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
        </div>
      </div>
    </SpoilerBox>
<!--    Nível 1~20 ^^-->

<!--    Nível 20~40 VV-->
    <SpoilerBox
        style="width: 100%;"
        title="Nível 20~40"
    >
      <div>
        <div class="guia-level-up-level-box">
<!--          Astrub VV-->
          <SpoilerBox
              title="Astrub"
              class="guia-level-up-success-box"
          >
            <div>
              <b>Calabouço:</b>
              <ul>
                <li>Celeiro do Girassol Faminto (Nív. 20) [7,-25]</li>
                <li>Castelo Arenoso (Nív. 20) [13,-28]</li>
                <li>Pátio do Papatudo Real (Nív. 30) [2,-34]</li>
                <li>Esconderijo do Karoblatta (Nív. 40) [3,-17]</li>
              </ul>
              <hr>
              <b>Sucesso:</b>
              <ul>
                <li>Um cidadão modelo</li>
                <li>A ocasião faz o ladrão</li>
                <li>A grande biblioteca</li>
                <li>Mercenário de aço</li>
                <li>Sem tempo a perder</li>
                <li>O habitat urbano</li>
                <li>Fugas e emboscadas</li>
              </ul>
              <hr/>
              <b>Número de missões:</b> 32
              <hr/>
              <b>Prêmios:</b>
              <ul>
                <li>Emote: Ajoelhado</li>
                <li>Emoticon: Faminto (Terceira sala do Esconderijo do Karoblatta)</li>
                <li>Título: Marca-página</li>
                <li>Ornamento Aventureiro honorável</li>
                <li>Dofus Prateado</li>
              </ul>
              <hr/>
              <i>
                Após completar os sucessos, volte para falar com Rathrosk no último andar da Torre do Conselho de Astrub em [4,-19]
                Para receber o Dafus Prateado.
              </i>
            </div>
          </SpoilerBox>
<!--          Astrub ^^-->

<!--          Os Dopel VV-->
          <SpoilerBox
              title="Os Dopel"
              class="guia-level-up-success-box"
          >
            <div>
              <b>Sucessos:</b> 38
              <hr/>
              <b>Prêmios:</b>
              <ul>
                <li>Ornamento: Lutador respeitável</li>
              </ul>
              <hr/>
              <i>
                Os Doples não ganham mais Doplons, apenas experiência.
              </i>
            </div>
          </SpoilerBox>
<!--          Os Dopel ^^-->

<!--          Missões diárias VV-->
          <SpoilerBox
              title="Missões diárias"
              class="guia-level-up-success-box"
          >
            <div>
              <b>Kerubim Crépin [3,-17]</b>
              <hr/>
              <b>Prêmios:</b>
              <ul>
                <li>Título: Amigo do Kerubim</li>
                <li>cabelos Kerubim</li>
                <li>Acesso ao Diligence após a conquista do missão: Cena caseira</li>
              </ul>
              <hr/>
              <b>Capitão Amakna [0,0]</b>
              <hr/>
              <b>Prêmios:</b>
              <ul>
                <li>Acesso à Base de Justiça ([0, 0] e [4, 4])</li>
              </ul>
            </div>
          </SpoilerBox>
<!--          Missões diárias ^^-->

<!--          Volta ao Mundo VV-->
          <SpoilerBox
              title="Volta ao Mundo"
              class="guia-level-up-success-box"
          >
            <div>
              <b>Meta Max [7,-24]</b>
              <hr/>
              <b>Sucesso relacionado:</b>
              <ul>
                <li>Volta ao mundo em 27 calabouços</li>
              </ul>
              <hr/>
              <b>Número de missões:</b> 25
              <hr/>
              <i>
                As missões da masmorra são uma grande fonte de Kamas e XP.
              </i>
            </div>
          </SpoilerBox>
<!--          Volta ao Mundo ^^-->

<!--          Calabouço de Musgo VV-->
          <SpoilerBox
              title="Calabouço de Musgo"
              class="guia-level-up-success-box"
          >
            <div>
              <b>Polly Gar [1,-15]</b>
              <hr/>
              <b>Sucesso relacionado:</b>
              <ul>
                <li>Primeira Edição de Calabouços</li>
              </ul>
              <hr/>
              <b>Número de missões:</b> 5
              <hr/>
              <i>
                As missões da masmorra são uma grande fonte de Kamas e XP.
              </i>
            </div>
          </SpoilerBox>
<!--          Calabouço de Musgo ^^-->
        </div>
      </div>
    </SpoilerBox>
<!--    Nível 20~40 ^^-->
  </div>
</template>

<script>
import SpoilerBox from "@/shared/SpoilerBox/SpoilerBox";
export default {
  name: 'GuiaLevelUp',
  components: {SpoilerBox},
}
</script>

<style
    lang="scss"
    scoped
>
@import "src/base";

.guia-level-up {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #FFF;
  position: relative;
  z-index: 0;
}

hr {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
}

.guia-level-up-level-box {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.guia-level-up-level-box-title {
  width: 100%;
  text-align: center;
}

.guia-level-up-success-box {
  max-width: 350px;
  background-color: #f3f4f5;
}

.guia-level-up-observation-box {
  max-width: 350px;
}
</style>

import './Portfolio.css';

const Portfolio = () => {
    return (
      <div className='content-container'>
      <div className='block-centered poem author'> Válogatás Marina Cvetajeva verseiből</div>
      <div className='poem-wrapper'>
        <div className='block-centered poem title'>
            <p className='hungarian'>Az éjek magányban, és az éjek...</p>
            <p className='russian'>Ночи без любимого — и ночи...</p>
        </div>
        <div className='block-centered poem text'>
            <p className='verse'>
                Az éjek magányban, és az éjek<br/>
                Közöny karjában, és a csillagok<br/>
                Izzó arcok felett, és a kezek,<br/>
                Amelyek majd felemelik Azt,<br/>
                Aki öröktől nem volt – és nem lesz,<br/>
                Aki nem lehet – lennie kell.<br/>
                És a gyermek könnyei a hősért,<br/>
                És a hős könnyei a gyermekért,<br/>
                És a nagy kőhegyek annak szívén,<br/>
                Akinek nincs más – csak lefelé...
            </p>
            <p className='verse'>
                Tudok mindent, ami volt, ami lesz,<br/>
                Minden elhallgatott igazságot,<br/>
                Mindazt, amit az emberek sötét,<br/>
                Durva nyelvén úgy hívnak: Élet.
            </p>
            <p className='year'>1918</p>
        </div>
      </div>

      <div className='poem-wrapper'>  
        <div className='block-centered poem title'>
            <p className='hungarian'>Kialszik két Nap – ó, kegyelmezz, Istenem!..</p>
            <p className='russian'>Два солнца стынут, – о Господи, пощади!..</p>
        </div>
        <div className='block-centered poem text'>
            <p className='verse'>
                Kialszik két Nap – ó, kegyelmezz, Istenem!<br/>
                Az egyik – fenn az égen, a másik – bennem.
            </p>
            <p className='verse'>
                Hogy ez a két Nap – megbocsátok magamnak? –,<br/>
                Két Nap: úgy az őrületbe taszítottak!
            </p>
            <p className='verse'>
                Kialszik mindkettő, sugaruk nem éget!<br/>
                Először a forróbb alszik ki végleg.
            </p>
            <p className='year'>1915</p>
        </div>
      </div>

      
      <div className='poem-wrapper'>
        <div className='block-centered poem title'>
            <p className='hungarian'>Éjjel minden szoba fekete...</p>
            <p className='russian'>По ночам все комнаты черны...</p>
        </div>
        <div className='block-centered poem text'>
            <p className='verse'>
                Éjjel minden szoba fekete,<br/>
                Mindenki hangja sötét. Éjjel<br/>
                A föld valamennyi szépsége<br/>
                Egyformán, ártatlanul, nem őszinte.
            </p>
            <p className='verse'>
                És beszélgetést folytatnak éjjel<br/>
                A föld szépei a tolvajnéppel.
            </p>
            <p className='verse'>
                Még az otthonod is idegen,<br/>
                Mikor mellette mész el éjjel!<br/>
                És a szomszéd – furcsán másmilyen,<br/>
                És minden hát mögött kés figyel.              
            </p>
            <p className='verse'>
                És erőtlen dühvel imbolyognak<br/>
                Hatalmas fák fekte lombjai.
            </p>
            <p className='verse'>
                Ó, szorít a földalatti ágy<br/>
                Éjjel, koromfekete éjjel!<br/>
                Ó, félek, hogy felemel a vágy,<br/>
                Suttogok s megcsókolom ajkát...
            </p>
            <p className='verse'>
                – Gyerekek, imátok értem szóljon<br/>
                Az első és a harmadik órán.
            </p>
            <p className='year'>1916</p>
        </div>
      </div>
  </div>
    )
  }
  
  export default Portfolio
  
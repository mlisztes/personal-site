import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return(
        <div className='cell'>
            <div className='poem author'> Válogatás Marina Cvetajeva verseiből</div>
            <div className='poem title'>
                <p className='hungarian'>Tetszik, hogy a szíve nem az enyém...</p>
                <p className='russian'>Мне нравится, что Вы больны не мной...</p>
            </div>
            <div className='poem text'>
                <p className='verse'>
                    Tetszik, hogy a szíve nem az enyém,<br/>
                    Tetszik, hogy a szívem nem a magáé,<br/>
                    Hogy alattunk biztos a föld, nehéz<br/>
                    És rezzenéstelenül áll örökké.<br/>
                    Tetszik, hogy fesztelen fordul felém<br/>
                    És nem bújik el csalfa szavak mögé,<br/>
                    És elpirulva nem kap el szenvedély,<br/>
                    Ha kezem kezéhez olykor hozzáér.
                </p>
                <p className='verse'>
                    Tetszik, hogy előttem más derekát<br/>
                    Fonja át nyugodt lelkiismerettel,<br/>
                    És pokoli tűzbe vetni nem kíván,<br/>
                    Ha hűtlen nem magát csókolom éjjel.<br/>
                    Hogy édes nevem, édesem, gyengéd ajkát<br/>
                    Nem hagyja el sem éjjel, semm nappal – sohasem...<br/>
                    Hogy templom csendjében halleluját<br/>
                    Miértünk soha, senki sem énekel!
                </p>
                <p className='verse'>
                    Szívemben csak hála van ön felé,<br/>
                    Hogy – nem tudva! – szeret minden hibámért:<br/>
                    Hogy lelkem nyugodt éjnek idején,<br/>
                    Hogy az alkonyóra nekünk ajándék,<br/>
                    Hogy holdfényes sétákra nincs remény,<br/>
                    Hogy a tündöklő nap felettünk másé,<br/>
                    Hogy a szíve – sajnos! – nem az enyém,<br/>
                    Hogy a szívem – sajnos! – nem a magáé.
                </p>
                <p className='year'>1915</p>
            </div>

            <div className='poem title'>
                <p className='hungarian'>Kialszik két csillag – ó kegyelmezz, Istenem!..</p>
                <p className='russian'>Два солнца стынут, — о Господи, пощади!..</p>
            </div>
            <div className='poem text'>
                <p className='verse'>
                    Kialszik két csillag – ó kegyelmezz, Istenem!<br/>
                    Az egyik – fent az égen, a másik – bennem.
                </p>
                <p className='verse'>
                    Ahogy e két Nap, megbocsátok magamnak? –<br/>
                    Két Nap, hogy az őrületbe taszítottak!
                </p>
                <p className='verse'>
                    Kialszik mindkettő – sugaruk nem éget!<br/>
                    Első a forróbb, mely kialszik végleg.
                </p>
                <p className='year'>1915</p>
            </div>
        </div>
    );
}

export default Welcome;
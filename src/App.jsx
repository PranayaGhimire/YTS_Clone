import React from 'react'
import Navbar from './components/Navbar'
import SearchMovie from './components/SearchMovie'
import Movies from './components/Movies'
import MoviePic from './components/MoviePic'
import Footer from './components/Footer'

const App = () => {
 
  return (
    <div>
      <Navbar/>
      <SearchMovie/>
      <h1 className='text-center bg-zinc-700 text-green-400  text-2xl lg:p-5 p-20'>YIFY Movies</h1>
      <Movies/>
      <div className='flex lg:space-x-8 space-x-1 p-5   bg-zinc-700 lg:justify-center flex-wrap '>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/andrew_schulz_life_2025/medium-cover.jpg" name="Andrew Schulz: Life" year="2025" />
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/Ghosts_of_Mars_2001/medium-cover.jpg" name="Ghosts of Mars" year="2001" />
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/smile_for_the_dead_an_examination_of_spirit_photography_2025/medium-cover.jpg" name="Smile for the Dead: An Ex" year="2025"/>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/contagion_of_fear_2023/medium-cover.jpg" name="Contagion of Fear" year="2025"/>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/vidaamuyarchi_2025/medium-cover.jpg" name="[TA] VidaaMuyarchi" year="2025"/>
      
      </div>
      <div className='flex lg:space-x-8 space-x-1 p-5 bg-zinc-700 lg:justify-center flex-wrap '>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/heart_eyes_2025/medium-cover.jpg" name="Heart Eyes" year="2025"/>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/doc_holliday_2023/medium-cover.jpg" name="Doc Holliday" year="2023"/>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/my_fair_lady_1964/medium-cover.jpg" name="My Fair Lady" year="1964"/>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/night_talkers_2024/medium-cover.jpg" name="Night Talkers" year="2024"/>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/william_tell_2024/medium-cover.jpg" name="William Tell" year="2024"/>
      </div>
      <div className='flex lg:space-x-8 space-x-1 p-5 bg-zinc-700 lg:justify-center flex-wrap '>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/somm_cup_of_salvation_2023/medium-cover.jpg" name="SOMM: Cup of Salvation" year="2023"/>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/ants_on_a_shrimp_2016/medium-cover.jpg" name="Ants on a Shrimp" year="2016"/>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/sal_2011/medium-cover.jpg" name="Sal" year="2011"/>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/missing_from_fire_trail_road_2024/medium-cover.jpg" name="Missing from Fire Trail Roa" year="2024"/>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/he_went_that_way_2023/medium-cover.jpg" name="He Went That Way" year="2023"/>
      </div>
      <div className='flex lg:space-x-8 space-x-1 p-5 bg-zinc-700 lg:justify-center flex-wrap '>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/the_year_dolly_parton_was_my_mom_2011/medium-cover.jpg" name="The Year Dolly Parton Was " year="2011"/>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/dororo_2007/medium-cover.jpg" name="[JA] Dororo" year="2007"/>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/fort_mccoy_2011/medium-cover.jpg" name="Fort McCoy" year="2011"/>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/holy_man_the_usa_vs_douglas_white_2011/medium-cover.jpg" name="Holy Man: The USA vs Do" year="2011"/>
      <MoviePic imgLink="https://img.yts.mx/assets/images/movies/things_will_be_different_2024/medium-cover.jpg" name="Things Will Be Different" year="2024"/>
      </div>
      <Movies/>
      {/* Phone view */}
      <div className='flex space-x-5 justify-center h-20 bg-zinc-900 text-white lg:hidden'>
        <div className='flex flex-col items-center justify-center'>
        <i class="fa-solid fa-house"></i>
        <p>Home</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <i class="fa-solid fa-right-to-bracket"></i>
        <p>Login</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <i class="fa-solid fa-user"></i>
        <p>Register</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App

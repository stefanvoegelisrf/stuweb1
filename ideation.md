# Ideation
This page is intended to list ideas for this module.

- [Ideation](#ideation)
  - [APIs \& Libraries](#apis--libraries)
  - [Lyrics analysis](#lyrics-analysis)
    - [Get descriptions for your playlists](#get-descriptions-for-your-playlists)
    - [Get a feedback on topics covered in your library](#get-a-feedback-on-topics-covered-in-your-library)
    - [Get an analysis of the complexity of rhyming patterns](#get-an-analysis-of-the-complexity-of-rhyming-patterns)
  - [Poetry by album and song titles](#poetry-by-album-and-song-titles)
  - [Get a soundtrack recommendation](#get-a-soundtrack-recommendation)
  - [Song Remix](#song-remix)
  - [Customized Spotify Player](#customized-spotify-player)

## APIs & Libraries
- [thecolorapi.com](https://www.thecolorapi.com/)
- [docs.genius.com - Genius API](https://docs.genius.com/)
- [github.com - color scheme js](https://github.com/c0bra/color-scheme-js)
- [github.com - kolorwheel.js](https://github.com/ern0/kolorwheel.js/)
- [last.fm - API documentation](https://www.last.fm/api)
- [docs.songstats.com - API documentation](https://docs.songstats.com/)
- [doc.api.soundcharts.com - API documentation](https://doc.api.soundcharts.com/api/v2/doc)

## Lyrics analysis
This idea would be based on the Spotify API and possibly the mixmatch API as well as a Large Language Model. The goal of this idea is to get a detailed analysis of the lyrics that you have saved in your library. This could go into multiple directions, which are explained in detail below.

### Get descriptions for your playlists
You can feed a single playlist and get a detailed data analysis of the metadata and the lyrics of the songs. The analysis could present you a cover, mood description and also topics mostly covered in the songs. The result could be visualized by showing the mood with various animations, colors and fonts that match the analysis, which could also be saved directly to your account.

### Get a feedback on topics covered in your library
You can feed a playlist, your whole library, your liked songs or any other specific selection of songs and extract the lyrics of those songs. The lyrics would then be analyzed on multiple topics. For the initial idea, I was thinking of analyzing sexistic topics covered in songs, as I listen to rap in many languages and I am only partly aware of the contents of the songs. It could deliver also other analysis, like wordclouds, categories and so on. This idea is inspired by the SRF Bounce Cypher, which also analyzed the parts that have been performed and provided stats on the words used in lyrics.


### Get an analysis of the complexity of rhyming patterns
For this use case, the syllables of lyrics could be analyzed and also rhyme patterns could be visually explained. This idea is inspired by [youtube.com - Vox - Rapping, deconstructed: The best rhymers of all time](https://www.youtube.com/watch?v=QWveXdj6oZU&t=2s)

## Poetry by album and song titles
With this use case, a personalized poem could be created using solely the song and album titles that a user has saved. The poem could have different sections which would be based on specific moods, categories and so on.

## Get a soundtrack recommendation
This idea intends to provide a workflow that can be used to create a soundtrack for a game, movie or other topics. This could be a combination of the Spotify API and the Gemini API. An example of a worflow could be to provide a set of mood pictures that would be analyzed by Gemini to provide a set of parameters, that we could feed into the Spotify Track recommendation API.

Parameters extracted, could be:
- acousticness
- danceability
- energy
- instrumentalness
- key
- liveness
- loudness
- mode
- popularity
- speechiness
- tempo
- time signature
- valence

## Song Remix
Based on Spotifys Song analysis, use the track seeking to create a remix of a song.

## Customized Spotify Player
Analyze the users tracks, playlists and then provide a matching player experience.

## Record label analysis
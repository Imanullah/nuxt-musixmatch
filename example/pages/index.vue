<template>
<div>
  Works!
  {{artisList}}
</div>
</template>

<script>
export default {

  data: () => ({
    artisList: null
  }),

  created() {
    console.log(this.$musixmatch)
    // console.log(this.$musixmatch.chartArtists({ page: 1, page_size: 3, country: 'us' }))

    this.$musixmatch.chartArtists({ page: 1, page_size: 3, country: 'us' })
      .then((res) => {
        console.log(res.artist_list)
      })
  }
}
</script>

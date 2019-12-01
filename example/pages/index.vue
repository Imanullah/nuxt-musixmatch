<template>
<div>
  Works!
</div>
</template>

<script>
export default {
  created() {
    this.$musixmatch.chartArtists({ page: 1, page_size: 3, country: 'us' }).then(function (res) {
      if (res != null) {
        console.log(res.artist_list)
      }
    })
  }
}
</script>

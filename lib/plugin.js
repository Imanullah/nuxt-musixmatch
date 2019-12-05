import Musixmatch from 'musixmatch'
const options = JSON.parse(`<%= JSON.stringify(options) %>`)

export default async (ctx, inject) => {
	inject('musixmatch', Musixmatch(options))
}

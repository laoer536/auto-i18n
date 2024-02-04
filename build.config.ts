import { defineBuildConfig } from 'unbuild'
export default defineBuildConfig({
  clean: true,
  rollup: {
    esbuild: {
      minify: true,
    },
  },
})

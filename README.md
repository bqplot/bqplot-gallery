# bqplot Gallery

![bqplot-logo](./bqplot-logo.svg)

This is a gallery of [bqplot](https://github.com/bqplot/bqplot) examples.

View the gallery at [https://bqplot.github.io/bqplot-gallery](https://bqplot.github.io/bqplot-gallery).

## Contributing new examples

1. Clone this repository
2. Add your notebook to [the notebooks directory](https://github.com/bqplot/bqplot-gallery/tree/main/notebooks).
    * If the notebook is standalone, then directly add it to the notebooks directory
    * If the notebook has any assets(python modules, data files etc.) then create a separate folder and put the notebook and the assets in that folder
3. Add a small preview of your visualization under [the imgs directory](https://github.com/bqplot/bqplot-gallery/tree/main/imgs).
4. Add an entry for your Notebook in [the `gallery.yaml` file](https://github.com/bqplot/bqplot-gallery/blob/main/_data/gallery.yaml) with a nice title and a description.
5. Create a PR to https://github.com/bqplot/bqplot-gallery
6. Once the PR is merged into `main`, the gallery is automatically redeployed and the new example will be visible shortly after.

## Related projects

This project was highly inspired by the Voilà gallery: https://voila-gallery.org.

- [Voilà](https://github.com/voila-dashboards/voila): Turn Jupyter Notebooks into standalone dashboards and web applications

## License

We use a shared copyright model that enables all contributors to maintain the
copyright on their contributions.

This software is licensed under the BSD-3-Clause license. See the
[LICENSE](LICENSE) file for details.

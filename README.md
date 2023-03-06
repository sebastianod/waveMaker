![banner](https://raw.githubusercontent.com/sebastianod/waveMaker/master/banner.svg)
# Waiv - Make some waves!

This project was inspired by Haikei, and math!

## What is Waiv?

Waiv takes some inputs like amplitude and wave color and gives you back a wave image in svg that you can download and use in designs.

### An answer to a problem
Waiv solves a basic problem I had: I want to give my own website a wavy style... Oh cool, Haikei exists, but...That would be a cool project!

## How it works: Broad-strokes

1. We use our React frontend to send JSON data containing the wave's "crazyness", height, amplitude, background color and wave color to our self-made python backend API (made with *flask*).
2. We get back a JSON file from our python API containing the wave SVG encoded in a base64 string.
3. We decode this sent data and show it inside an img tag.

## Deployment
Waiv's frontend and backend are deployed separately.

**Local version:** You can run it locally by cloning this [repo](https://github.com/sebastianod/waveMaker). 

* The project's frontend is deployed on Vercel and [this](https://github.com/sebastianod/waiv-client) is its repo.

* The project's backend is deployed on Render.com and [this](https://github.com/sebastianod/waiv-server) is its repo.

## Mathematical idea
A wonderful mathematical discovery made by Joseph Fourier is what makes Waiv possible. It turns out that any piece-wise smooth function can be written in terms of a sum of the humble sine and cosine functions! One of these results is the [Fourier Series](https://en.wikipedia.org/wiki/Fourier_series#):

$$
f(t)= a_0 + \sum_{k=1}^{∞}a_k Sin(\frac{2\pi kt}{L}+α) + \sum_{k=1}^{∞}b_k Cos(\frac{2\pi kt}{L}+β)
$$

**Mathematically:** We'd like to find an (almost) arbitrary function $f(t)$ (*left-hand side*) using the *right-hand side* of the equation.

In order to do that we need to find the coefficients $a_k$ and $b_k$ that are needed to construct a specific function $f(t)$. We'd need quite a bit of math...thankfully for our purposes we only need to randomly populate these coefficients, simple as `ak=np.random.rand()` in python.

**Programatically:**
* $a_0$ becomes our *height*.
* The coefficients $a_k,b_k$ take the form of `np.random.rand()`.
* $t$ is our domain, i.e `t=np.linspace(0, 2*np.pi, 4000)`.
* $\alpha$ and $\beta$ take the form of `np.random.rand()*constant`, where constant can be any integer.
* $k$, the number of sums, becomes `i` in our for loop for the fourier series.

The more sums we have, the more *sines* and *cosines* that will be added, thus generating a more "crazy wave".

*Low crazyness* or small `i` produces:
![Low crazyness](https://raw.githubusercontent.com/sebastianod/waveMaker/master/lowcrazy.svg)
*High crazyness* or a larger `i` produces:
![Low crazyness](https://raw.githubusercontent.com/sebastianod/waveMaker/master/highcrazy.svg)


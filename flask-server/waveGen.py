import matplotlib.pyplot as plt
import numpy as np
from flask import Flask, request
from flask_cors import CORS
import json

# Initializing flask app
app = Flask(__name__)

# #enable CORS
CORS(app)

#handle incoming values from react client, use them to create the wave

@app.route('/getwave', methods=['POST'])
def my_function():
    data = request.get_json() #incoming data in JSON format
    # process the data here

    return json.dumps(data) #send back in JSON format

if __name__ == '__main__':
    app.run(debug=True)

 # # Domain
        # x = np.linspace(0, 2*np.pi, 1000)

        # # height
        # height = 8
        
        # # -----------Fourier Series----------#
        # # the higher n, the quicker you see a pattern
        # def fourierSeries(mainAmplitude, domain, crazyness):
        #     y = 0
        #     for i in range(crazyness):
        #         an = np.random.rand()
        #         bn = np.random.rand()
        #         y += an*np.cos(i*domain) + bn*np.sin(i*domain)
        #     return mainAmplitude*y


        # # RANGES: height: 0-8, crazyness: 2-10 , amplitude: 0.1 - 0.5
        # y = fourierSeries(0.5, x, 10)

        # # Above zero
        # actualY = y - y.min()  # take the minimum negative value and add a height

        # # Create a figure and axis
        # fig, ax = plt.subplots()

        # # Plot the sine wave
        # #ax.plot(x, actualY, color='blue')

        # # Fill the area underneath the curve with color
        # ax.fill_between(
        #     x,
        #     0,
        #     actualY+height,
        #     where=actualY > 0,
        #     interpolate=True,
        #     color='#3D2386',
        #     alpha=1
        # )

        # # Fill the area above the curve with red
        # #ax.fill_between(x, actualY.max()+5, actualY, where=actualY>0, interpolate=True, color='red', alpha=1)

        # # set x and y limits of the plot
        # ax.set_ylim(0.0, 15)  # maximum value of the function plus a constant
        # ax.set_xlim(0.0, x[-1])  # from zero to the last value of the x array

        # # Do not show axis
        # ax.axis('off')

        # # Set the background color of the fifure
        # fig.set_facecolor('#6A65AB')

        # # Set the padding around the plot to zero
        # fig.subplots_adjust(
        #     left=0,
        #     bottom=0,
        #     right=1,
        #     top=1
        # )

        # # save the plot, must include the color of the figure, no edge colors and no padding
        # fig.savefig("test.svg", facecolor=fig.get_facecolor(),
        #             edgecolor='none', pad_inches=0)

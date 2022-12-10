import React from 'react';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import './App.css'
class App extends React.Component
{
    drawRect = (id) =>
    {
        console.log('id sent is', id)
        var canv = document.createElement("canvas");
        canv.setAttribute("id", id);
        var rec = [];

        for (var i = 1; i <= 50; i++)
        {
            rec.push(i);
        }
        return rec.map((item) =>
        {
            return (

                    <Draggable>
                        <div className='rectangle position-absolute'>

                        </div>
                    </Draggable>
            )
        })

    }
    drawRect2 = (id) =>
    {
        console.log('id sent is', id)
        var canv = document.createElement("canvas");
        canv.setAttribute("id", id);
        var rec = [];

        for (var i = 1; i <= 50; i++)
        {
            rec.push(i);
        }
        return rec.map((item) =>
        {
            return (

                    <Draggable>
                        <div className='rectangle2 position-absolute'>

                        </div>
                    </Draggable>
            )
        })

    }
    drawCirc = (id) =>
    {
        console.log('id sent is', id)
        var canv = document.createElement("canvas");
        canv.setAttribute("id", id);
        var foo = [];

        for (var i = 1; i <= 50; i++)
        {
            foo.push(i);
        }
        return foo.map((item) =>
        {
            return (
                <Draggable>
                    <span className='dot position-absolute ' ></span>
                </Draggable>
            )
        })

    }
    render()
    {
        return (

            <div className='container-fluid  '>
                {/* <p>Line Up App Floor Plan Assignment</p> */}
                <div>

                </div>
                <div className='row align-items=center justify-items-center'>
                    <div className='col-sm-3  '>
                        <p className='text-center ml-5 mb-5 font-weight-bold pb-5'>Select from any of the shapes below</p>
                        {this.drawRect()}
                        {this.drawCirc()}
                        {this.drawRect2()}
                    </div>

                    <div className='col-sm-9 behind text-canter'>
                        <p className='font-weight-bold text-center'>Place items here to form a layout</p>
                        <Draggable

                        >
                            <canvas className='box_shadow' id="canvas" width='700' height={"700"} style={{ "border": "2px solid black", "backgroundColor":"#d9d9d9" }} />
                        </Draggable>
                    </div>
                </div>
            </div>

        )
    }
}

export default App;

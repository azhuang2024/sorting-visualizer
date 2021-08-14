import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }
    
    componentDidMount() { // called when app loads
        this.resetArray();
    }
    
    resetArray() {
        const array = [];
        for (let i=0; i<300; ++i) {
            array.push(randomIntFromInterval(5, 700));
        }
        this.setState({array});
    }

    mergeSort() {

    }

    heapSort() {

    }

    quickSort() {

    }

    bubbleSort() {

    }

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div 
                        className="array-bar" 
                        key={idx} 
                        style={{height: `${value}px`}}>
                    </div>
                ))}
                <br></br>
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </div>
        );
    }
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

function mergeSortHelper(array) {
    if (array.length < 2) {
        return array;
    }

    const mid = Math.floor(array.length/2);
    const firstHalf = mergeSortHelper(array.slice(0,mid));
    const secondHalf = mergeSortHelper(array.slice(mid));
    return merge(firstHalf, secondHalf);
}

function merge(firstArray, secondArray) {
    const sortedArray = [];
    let i=0, j=0;

    // Combine two arrays into sorted array, smallest values first
    while (i<firstArray.length && j<secondArray.length) {
        if (firstArray[i] < secondArray[j]) {
            sortedArray.push(firstArray[i++]);
        }
        else {
            sortedArray.push(secondArray[j++]);
        }
    }
    
    // Add remaining elements
    while (i<firstArray.length) {
        sortedArray.push(firstArray[i++]);
    }
    while (j<secondArray.length) {
        sortedArray.push(secondArray[j++]);
    }
}
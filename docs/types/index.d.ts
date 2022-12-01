/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { NumericArray } from '@stdlib/types/array';

/**
* Interface describing `range`.
*/
interface Routine {
	/**
	* Computes the range of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = range( x.length, x, 1 );
	* // returns 4.0
	*/
	( N: number, x: NumericArray, stride: number ): number;

	/**
	* Computes the range of a strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @param offset - starting index
	* @returns range
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = range.ndarray( x.length, x, 1, 0 );
	* // returns 4.0
	*/
	ndarray( N: number, x: NumericArray, stride: number, offset: number ): number; // tslint:disable-line:range-line-length
}

/**
* Computes the range of a strided array.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - stride length
* @returns range
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = range( x.length, x, 1 );
* // returns 4.0
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = range.ndarray( x.length, x, 1, 0 );
* // returns 4.0
*/
declare var range: Routine;


// EXPORTS //

export = range;

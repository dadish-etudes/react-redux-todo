/**
 * Show DevTools
 * 
 * Opens the devtools in a seperate window
 * 
 * @function 
 */

import React from 'react'
import { render } from 'react-dom'
import DevTools from './containers/DevTools'

export default function showDevTools (store) {
	// check if window is availeble and return if not
	// this probably means it is a node environment
	if (typeof window === 'undefined') return;

	const popup = window.open(null, 'Redux DevTools', 'menubar=no, resizable=yes, scrollbars=no, status=no')
	popup.location.reload()
	setTimeout(function () {
		popup.document.write("<div id='react-devtools-root'></div>")
		render(
			<DevTools store={store}/>,
			popup.getElementById('react-devtools-root')
			)
	}, 10)
}
/*
	WebPlotDigitizer - http://arohatgi.info/WebPlotDigitizer

	Version 2.0

	Copyright 2010 Ankit Rohatgi <ankitrohatgi@hotmail.com>

	This file is part of WebPlotDigitizer.

    WebPlotDigitizer is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    WebPlotDigitizer is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with WebPlotDigitizer.  If not, see <http://www.gnu.org/licenses/>.


*/

/* This file contains functions to handle popup windows */

function showPopup(popupid)
{
	// Dim lights :)
	var shadowDiv = document.getElementById('shadow');
	shadowDiv.style.visibility = "visible";

	var pWindow = document.getElementById(popupid);
	var screenWidth = parseInt(window.innerWidth);
	var screenHeight = parseInt(window.innerHeight);
	var pWidth = parseInt(pWindow.offsetWidth);
	var pHeight = parseInt(pWindow.offsetHeight);
	var xPos = (screenWidth - pWidth)/2;
	var yPos = (screenHeight - pHeight)/2;
	pWindow.style.left = xPos + 'px';
	pWindow.style.top = yPos + 'px';
	pWindow.style.visibility = "visible";
}

function closePopup(popupid)
{
	var shadowDiv = document.getElementById('shadow');
	shadowDiv.style.visibility = "hidden";

	var pWindow = document.getElementById(popupid);
	pWindow.style.visibility = "hidden";

}


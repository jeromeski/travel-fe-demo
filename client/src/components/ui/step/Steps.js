import React from 'react'

function Steps({currentIdx}) {
  if (currentIdx === 0) {
		return <h1>1</h1>;
	}
	if (currentIdx === 1) {
		return <h1>2</h1>;
	}
	if (currentIdx === 2) {
		return <h1>3</h1>;
	}
  if (currentIdx === 3) {
		return <h1>4</h1>;
	}
}

export default Steps
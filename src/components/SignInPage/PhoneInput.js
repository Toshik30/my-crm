import { useState } from 'react';

const Component = () => {
	const [value, setValue] = useState(0);

	return (
    <div>
	    <First setValue2={setValue}/>
	    <Second value={value}/>
    </div>
  );
};

const First = (props) => {
	return <div>
		<button onClick={() => props.setValue2((prevValue) => prevValue + 1)}>Click</button>
	</div>
}

const Second = (props) => {
	return <div>{props.value}</div>
}

export default Component;

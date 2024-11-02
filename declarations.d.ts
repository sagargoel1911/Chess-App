declare module '*.svg' {
	import * as React from 'react';

	const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

	export default ReactComponent;
}

declare module '*.png' {
	const value: import('react-native').ImageSourcePropType;
	export default value;
}

declare module '*.mp3';

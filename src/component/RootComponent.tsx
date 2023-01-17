import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useAppSelector } from "../redux/hooks";

function RootComponent () {
	const userToken = useAppSelector(state => state.tokenSlice);
	return (
		<NavigationContainer>
			{
				userToken.token == '' ? <AuthStack/> : <MainStack/>
			}
		</NavigationContainer>
	)
}
export default RootComponent;

  
import { StackScreenProps } from '@react-navigation/stack';
import { ProductStackNavigationParamsType } from '../../store/core/types'


export type FilterSKUNumberScreenParamProps = StackScreenProps<ProductStackNavigationParamsType, 'filterSKUNumber'>

export type FilterSKUNumberScreenState = { }

export type FilterSKUNumberScreenDataProps = {
    options: number[]
}

export type FilterSKUNumberScreenDispatchProps = {
    setSKUNumber: (SKUNumber: number) => void
 }

export type FilterSKUNumberScreenProps =
    FilterSKUNumberScreenParamProps &
    FilterSKUNumberScreenDispatchProps &
    FilterSKUNumberScreenDataProps
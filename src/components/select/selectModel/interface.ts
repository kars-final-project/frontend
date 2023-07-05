export interface model {
    id: string
	name: string
	brand: string
	year: string
	fuel: number
	value: number
}

export interface Props {
    options: model[]
    label: string
}
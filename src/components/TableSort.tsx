import _ from 'lodash'
import React from 'react'
import { Table } from 'semantic-ui-react'

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'CHANGE_SORT':
            if (state.column === action.column) {
                return {
                    ...state,
                    data: state.data.slice().reverse(),
                    direction:
                        state.direction === 'ascending' ? 'descending' : 'ascending',
                }
            }

            return {
                column: action.column,
                data: _.sortBy(state.data, [action.column]),
                direction: 'ascending',
            }
        default:
            throw new Error()
    }
}

function TableSort({ children, columns, columnTitles }: { children: any, columns: string[], columnTitles: string[] }) {
    const [state, dispatch] = React.useReducer(reducer, {
        column: null,
        data: children,
        direction: null,
    })
    const { column, data, direction } = state
    return (
        <Table sortable striped>
            <Table.Header>
                <Table.Row className='font-OpenSans text-[14px]'>
                    {columns.map((item, index) =>
                        <Table.HeaderCell
                            key={index}
                            sorted={column === item ? direction : null}
                            onClick={() => dispatch({ type: 'CHANGE_SORT', column: item })}
                        >
                            {columnTitles[index]}
                        </Table.HeaderCell>
                    )}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {data.map(({ id, ...cellData }: any) => (
                    <Table.Row key={id} className='font-OpenSans text-[14px]'>
                        {Object.keys(cellData).map((item, index) => <Table.Cell key={index}>{cellData[item]}</Table.Cell>)}
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}

export default TableSort
import React from 'react';
import PropTypes from 'prop-types';
import CardLarge from '../CardLarge';
import { Form, Col, Button } from 'react-bootstrap';

function CardForm({
    name,
    onSetName,
    price,
    onSetPrice,
    ingredients,
    availability,
    onSetAvailability,
    sale,
    onSetSale,
    newIngredient,
    setNewIngredient,
    ingredientsList,
    onAddIngredient,
    onSubmit
}) {
    return (
        <CardLarge
            header={name}
            bodyElement={
                <Form onSubmit={(e) => onSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nome"
                            value={name}
                            onChange={e => onSetName(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Prezzo</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Prezzo"
                            value={price}
                            onChange={e => onSetPrice(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Lista ingredienti:</Form.Label>
                        <ul>
                            {
                                ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient.name} {ingredient.value}{ingredient.units}</li>
                                ))
                            }
                        </ul>
                    </Form.Group>
                    <Form.Label>Aggiungi ingrediente:</Form.Label>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control
                                as="select"
                                value={newIngredient.idRef}
                                onChange={e => {
                                    const { value, _id: idRef, ...params } = ingredientsList.find(i => i._id === e.target.value);
                                    setNewIngredient({ ...params, idRef });
                                }}
                            >
                                {
                                    ingredientsList.map((ingredient, index) => (
                                        <option key={index} value={ingredient._id}>{ingredient.name}</option>
                                    ))
                                }
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} sm="2">
                            <Form.Control
                                required
                                type="text"
                                value={newIngredient.value}
                                onChange={e => setNewIngredient({ value: parseFloat(e.target.value) })}
                                placeholder="Qty" />
                        </Form.Group>
                        <Form.Group as={Col} xs="auto">
                            <Button
                                disabled={ingredientsList.length === 0}
                                variant="outline-success"
                                onClick={onAddIngredient}
                            >Aggiungi</Button>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Disponibilità</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            size="sm"
                            value={availability}
                            onChange={e => onSetAvailability(parseInt(e.target.value))}
                            placeholder="Disponibilità"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check
                            type="switch"
                            id="sale-switch"
                            checked={sale}
                            onChange={e => onSetSale(e.target.checked)}
                            label="In vendita"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">Salva</Button>
                </Form>
            } />
    )
}

CardForm.propTypes = {
    name: PropTypes.string,
    onSetName: PropTypes.func,
    price: PropTypes.string,
    onSetPrice: PropTypes.func,
    ingredients: PropTypes.array,
    availability: PropTypes.number,
    onSetAvailability: PropTypes.func,
    sale: PropTypes.bool,
    onSetSale: PropTypes.func,
    newIngredient: PropTypes.object,
    setNewIngredient: PropTypes.func,
    ingredientsList: PropTypes.array,
    onAddIngredient: PropTypes.func,
    onSubmit: PropTypes.func
};

export default CardForm;

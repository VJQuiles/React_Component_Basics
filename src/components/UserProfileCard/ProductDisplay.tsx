import React from "react"
import type { ProductDisplayProps } from "../../types"

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
    product,
    showDescription,
    showStockStatus,
    onAddToCart,
    children,
}) => {

    return (
        <div className="card">
            <div className="body">
                <h5 className="card-title">{product.name}</h5>
                {showDescription && <p className="card-text">{product.description}</p>}
                {showStockStatus && <p className="card-text">{product.inStock}</p>}
                {onAddToCart && (
                    <button
                        className="btn btn-primary"
                        onClick={() => onAddToCart(product.name)}>
                        Add to carrito
                    </button>
                )}
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
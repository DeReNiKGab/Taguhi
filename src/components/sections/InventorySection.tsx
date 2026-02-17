import type { InventoryItem, TranslateFn, UiText } from '../../types/site'

type InventorySectionProps = {
  t: TranslateFn
  inventoryText: UiText['inventory']
  inventory: InventoryItem[]
}

export function InventorySection({ t, inventoryText, inventory }: InventorySectionProps) {
  return (
    <section className="section" id="inventory">
      <div className="container">
        <div className="section-heading reveal">
          <p className="kicker">{t(inventoryText.kicker)}</p>
          <h2>{t(inventoryText.title)}</h2>
        </div>

        <div className="filter-bar reveal" aria-label="Inventory filters">
          <label>
            {t(inventoryText.brand)}
            <select defaultValue={t(inventoryText.anyBrand)}>
              <option>{t(inventoryText.anyBrand)}</option>
              <option>BMW</option>
              <option>Mercedes-Benz</option>
              <option>Porsche</option>
            </select>
          </label>
          <label>
            {t(inventoryText.year)}
            <select defaultValue={t(inventoryText.anyYear)}>
              <option>{t(inventoryText.anyYear)}</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </label>
          <label>
            {t(inventoryText.budget)}
            <select defaultValue={t(inventoryText.anyBudget)}>
              <option>{t(inventoryText.anyBudget)}</option>
              <option>{t(inventoryText.under80)}</option>
              <option>{t(inventoryText.between80And120)}</option>
              <option>{t(inventoryText.over120)}</option>
            </select>
          </label>
          <label>
            {t(inventoryText.condition)}
            <select defaultValue={t(inventoryText.allConditions)}>
              <option>{t(inventoryText.allConditions)}</option>
              <option>{t(inventoryText.likeNew)}</option>
              <option>{t(inventoryText.minorRepair)}</option>
              <option>{t(inventoryText.rebuildReady)}</option>
            </select>
          </label>
        </div>

        <div className="inventory-grid">
          {inventory.map((car) => (
            <article className="car-card reveal" key={car.name}>
              <div className="car-image-wrap">
                <img src={car.image} alt={car.name} loading="lazy" />
              </div>
              <div className="car-info">
                <h3>{car.name}</h3>
                <p>
                  {car.year} • {car.mileage}
                </p>
                <p>
                  {t(inventoryText.source)}: {car.source}
                </p>
                <div className="card-footer">
                  <strong>{car.price}</strong>
                  <button type="button" className="text-link">
                    {t(inventoryText.viewDetails)}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const planets = (onChange) => {
    return (
        <select name="planet" onChange={onChange} required>
        <option value="Mercúrio">Mercúrio</option>
        <option value="Vênus">Vênus</option>
        <option value="Terra">Terra</option>
        <option value="Marte">Marte</option>
        <option value="Júpiter">Júpiter</option>
        <option value="Saturno">Saturno</option>
        <option value="Urano">Urano</option>
        <option value="Netuno">Netuno</option>
        <option value="Plutão(planeta anão)">Plutão(planeta anão)</option>
        </select>
)} 
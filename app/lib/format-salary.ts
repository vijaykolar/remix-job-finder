function formatSalaryRange(salaryRange: string) {
  // Convert the salary range to numbers
  //   console.log(salaryRange);
  const [min, max] = salaryRange.split('-').map((s) => parseInt(s.replace(/[^\d]/g, '')));

  // Check if both min and max values are available
  if (!isNaN(min) && !isNaN(max)) {
    // Convert the numbers to abbreviated format
    const minAbbreviated = abbreviateNumber(min);
    const maxAbbreviated = abbreviateNumber(max);

    // Format the result
    return `${minAbbreviated}-${maxAbbreviated}`;
  }

  // Return original string if conversion fails
  return salaryRange;
}

function abbreviateNumber(number: number) {
  // Define the number abbreviations
  const abbreviations =
    [
      { value: 1e3, symbol: 'k' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'B' },
    ] || [];

  // Find the appropriate abbreviation
  const abbreviation =
    abbreviations.reverse().find((abbrev) => number >= abbrev.value) || ({} as { value: number; symbol: string });

  // Abbreviate the number
  return (number / abbreviation?.value).toFixed(0) + abbreviation.symbol;
}

function formatSalary(salaryRange: string) {
  const formattedSalaryRange = formatSalaryRange(salaryRange);
  return formattedSalaryRange;
}

export { formatSalary };

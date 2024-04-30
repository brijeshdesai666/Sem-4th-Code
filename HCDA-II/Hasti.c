#include <stdio.h>

int main()
{
    int number, largest, smallest, sum;
    char choice;

    do
    {
        // Reset sum for each new set of numbers
        sum = 0;
        printf("Enter a number (0 to stop): ");
        scanf("%d", &number);

        if (number == 0)
        {
            // Handle case if the very first number is zero
            printf("No numbers entered.\n");
            largest = smallest = 0;
        }
        else
        {
            // Initialize largest and smallest with the first valid number
            largest = smallest = number;
            sum += number;
        }

        while (number != 0)
        {
            printf("Enter a number (0 to stop): ");
            scanf("%d", &number);

            if (number != 0)
            {
                if (number > largest)
                    largest = number;
                if (number < smallest)
                    smallest = number;
                sum += number;
            }
        }

        // Output results
        if (largest != 0 || smallest != 0)
        { // Check to ensure at least one non-zero number was entered
            printf("Largest number: %d\n", largest);
            printf("Smallest number: %d\n", smallest);
            printf("Sum of numbers: %d\n", sum);
        }

        // Ask user if they want to continue
        printf("Do you want to enter a new set of numbers? (y/n): ");
        scanf(" %c", &choice); // Note the space before %c to consume any leftover newline character

    } while (choice == 'y' || choice == 'Y');

    return 0;
}

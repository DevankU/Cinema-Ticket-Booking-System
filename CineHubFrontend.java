// Frontend.java
import javax.swing.*;
import javax.swing.border.*;
import java.awt.*;
import java.awt.event.*;
import java.text.SimpleDateFormat;
import java.util.*;

public class CineHubFrontend extends JFrame {
    // Components
    private final JPanel mainPanel, headerPanel, contentPanel, seatSelectionPanel, screenPanel, legendPanel, summaryPanel;
    private final JLabel headerLabel, screenLabel;
    private final JButton homeButton, moviesButton, theatresButton, recommendationsButton;
    private final JComboBox<String> categoriesDropdown;
    private final JButton searchButton, profileButton, confirmBookingButton;
    
    // Booking info
    private final String selectedMovie = "The Dark Knight Returns";
    private final String selectedTheatre = "CineHub Theatre 1";
    private final String selectedDate = "Monday, April 21, 2025";
    private final String selectedTime = "7:00 PM";
    private final java.util.List<String> selectedSeats = new ArrayList<>();
    private double subtotal = 0.0;
    private final double convenienceFee = 30.0;
    private double total = 0.0;
    
    // Seat pricing
    private static final double STANDARD_PRICE = 280.0;
    private static final double PREMIUM_PRICE = 350.0;
    private static final double VIP_PRICE = 400.0;
    
    // Seat colors
    private static final Color STANDARD_COLOR = new Color(100, 100, 100);
    private static final Color PREMIUM_COLOR = new Color(30, 70, 200);
    private static final Color VIP_COLOR = new Color(128, 0, 128);
    private static final Color SELECTED_COLOR = new Color(0, 100, 255);
    private static final Color BOOKED_COLOR = new Color(50, 50, 50);
    
    // Backend reference
    private final CineHubBackend backend;

    public CineHubFrontend() {
        // Initialize backend
        backend = new CineHubBackend();
        
        // Set up main frame
        setTitle("CineHub - Book Movie Tickets Online");
        setSize(1200, 800);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        
        // Initialize components
        setupComponents();
        
        // Set visible
        setVisible(true);
    }
    
    private void setupComponents() {
        // Main container with BorderLayout
        mainPanel = new JPanel(new BorderLayout());
        mainPanel.setBackground(Color.BLACK);
        
        // Header Panel
        setupHeader();
        
        // Content Panel (Center)
        setupContent();
        
        // Add panels to main panel
        mainPanel.add(headerPanel, BorderLayout.NORTH);
        mainPanel.add(contentPanel, BorderLayout.CENTER);
        
        // Add main panel to frame
        setContentPane(mainPanel);
    }
    
    private void setupHeader() {
        headerPanel = new JPanel(new BorderLayout());
        headerPanel.setBackground(Color.BLACK);
        headerPanel.setBorder(BorderFactory.createEmptyBorder(10, 20, 10, 20));
        
        // Logo
        headerLabel = new JLabel("CineHub");
        headerLabel.setFont(new Font("Arial", Font.BOLD, 24));
        headerLabel.setForeground(new Color(0, 123, 255));
        
        // Navigation buttons
        JPanel navPanel = new JPanel(new FlowLayout(FlowLayout.CENTER, 20, 0));
        navPanel.setBackground(Color.BLACK);
        
        homeButton = createNavButton("Home");
        moviesButton = createNavButton("Movies");
        theatresButton = createNavButton("Theatres");
        recommendationsButton = createNavButton("Recommendations");
        
        categoriesDropdown = new JComboBox<>(new String[]{"Categories"});
        categoriesDropdown.setBackground(Color.BLACK);
        categoriesDropdown.setForeground(Color.WHITE);
        
        navPanel.add(homeButton);
        navPanel.add(moviesButton);
        navPanel.add(theatresButton);
        navPanel.add(recommendationsButton);
        navPanel.add(categoriesDropdown);
        
        // Action buttons
        JPanel actionPanel = new JPanel(new FlowLayout(FlowLayout.RIGHT));
        actionPanel.setBackground(Color.BLACK);
        
        searchButton = new JButton("🔍");
        searchButton.setBackground(Color.BLACK);
        searchButton.setForeground(Color.WHITE);
        searchButton.setBorderPainted(false);
        
        profileButton = new JButton("👤");
        profileButton.setBackground(Color.BLACK);
        profileButton.setForeground(Color.WHITE);
        profileButton.setBorderPainted(false);
        
        actionPanel.add(searchButton);
        actionPanel.add(profileButton);
        
        // Add components to header
        headerPanel.add(headerLabel, BorderLayout.WEST);
        headerPanel.add(navPanel, BorderLayout.CENTER);
        headerPanel.add(actionPanel, BorderLayout.EAST);
    }
    
    private JButton createNavButton(String text) {
        JButton button = new JButton(text);
        button.setBackground(Color.BLACK);
        button.setForeground(Color.WHITE);
        button.setBorderPainted(false);
        button.setFocusPainted(false);
        return button;
    }
    
    private void setupContent() {
        contentPanel = new JPanel(new BorderLayout(20, 0));
        contentPanel.setBackground(new Color(10, 10, 20));
        contentPanel.setBorder(BorderFactory.createEmptyBorder(10, 20, 20, 20));
        
        // Seat Selection Panel (Left)
        setupSeatSelection();
        
        // Booking Summary Panel (Right)
        setupBookingSummary();
        
        // Add to content panel
        contentPanel.add(seatSelectionPanel, BorderLayout.CENTER);
        contentPanel.add(summaryPanel, BorderLayout.EAST);
    }
    
    private void setupSeatSelection() {
        seatSelectionPanel = new JPanel(new BorderLayout(0, 20));
        seatSelectionPanel.setBackground(new Color(10, 10, 20));
        
        // Screen
        screenPanel = new JPanel();
        screenPanel.setBackground(new Color(20, 20, 40));
        screenPanel.setPreferredSize(new Dimension(600, 40));
        screenLabel = new JLabel("SCREEN");
        screenLabel.setForeground(Color.WHITE);
        screenPanel.add(screenLabel);
        
        // Seats Grid
        JPanel seatsGrid = new JPanel(new GridLayout(10, 12, 5, 5));
        seatsGrid.setBackground(new Color(10, 10, 20));
        
        String[] rows = {"A", "B", "C", "D", "E", "F", "G", "H", "J"};
        
        // Add row labels on left side
        JPanel rowLabelsLeft = new JPanel(new GridLayout(10, 1, 5, 5));
        rowLabelsLeft.setBackground(new Color(10, 10, 20));
        
        for (String row : rows) {
            JLabel rowLabel = new JLabel(row);
            rowLabel.setForeground(Color.WHITE);
            rowLabel.setHorizontalAlignment(SwingConstants.CENTER);
            rowLabelsLeft.add(rowLabel);
        }
        
        // Add row labels on right side
        JPanel rowLabelsRight = new JPanel(new GridLayout(10, 1, 5, 5));
        rowLabelsRight.setBackground(new Color(10, 10, 20));
        
        for (String row : rows) {
            JLabel rowLabel = new JLabel(row);
            rowLabel.setForeground(Color.WHITE);
            rowLabel.setHorizontalAlignment(SwingConstants.CENTER);
            rowLabelsRight.add(rowLabel);
        }
        
        // Generate seats
        JPanel seatsPanel = new JPanel(new GridLayout(9, 12, 5, 5));
        seatsPanel.setBackground(new Color(10, 10, 20));
        
        // Random set of already booked seats
        Set<String> bookedSeats = backend.getBookedSeats(selectedMovie, selectedTheatre, selectedDate, selectedTime);
        
        for (int i = 0; i < rows.length; i++) {
            final int rowIndex = i; // Make row index effectively final
            for (int j = 1; j <= 12; j++) {
                final int colIndex = j; // Make column index effectively final
                final String seatId = rows[rowIndex] + colIndex;
                JButton seat = new JButton(String.valueOf(colIndex));
                
                // Set appearance based on seat type
                if (j >= 1 && j <= 3) {
                    // VIP seats
                    seat.setBackground(VIP_COLOR);
                    seat.setForeground(Color.WHITE);
                } else if (j >= 4 && j <= 9) {
                    // Premium seats
                    seat.setBackground(PREMIUM_COLOR);
                    seat.setForeground(Color.WHITE);
                } else {
                    // Standard seats
                    seat.setBackground(STANDARD_COLOR);
                    seat.setForeground(Color.WHITE);
                }
                
                // If seat is already booked
                if (bookedSeats.contains(seatId)) {
                    seat.setBackground(BOOKED_COLOR);
                    seat.setEnabled(false);
                }
                
                seat.setFocusPainted(false);
                seat.setPreferredSize(new Dimension(40, 40));
                
                // Add action listener
                seat.addActionListener(e -> {
                    if (selectedSeats.contains(seatId)) {
                        // Deselect seat
                        selectedSeats.remove(seatId);
                        
                        // Reset color based on seat type
                        if (colIndex >= 1 && colIndex <= 3) {
                            seat.setBackground(VIP_COLOR);
                        } else if (colIndex >= 4 && colIndex <= 9) {
                            seat.setBackground(PREMIUM_COLOR);
                        } else {
                            seat.setBackground(STANDARD_COLOR);
                        }
                    } else {
                        // Select seat
                        selectedSeats.add(seatId);
                        seat.setBackground(SELECTED_COLOR);
                    }
                    
                    // Update booking summary
                    updateBookingSummary();
                });
                
                seatsPanel.add(seat);
            }
        }
        
        // Layout seats with row labels
        JPanel fullSeatsPanel = new JPanel(new BorderLayout());
        fullSeatsPanel.setBackground(new Color(10, 10, 20));
        fullSeatsPanel.add(rowLabelsLeft, BorderLayout.WEST);
        fullSeatsPanel.add(seatsPanel, BorderLayout.CENTER);
        fullSeatsPanel.add(rowLabelsRight, BorderLayout.EAST);
        
        // Legend Panel
        setupLegend();
        
        // Add components to seat selection panel
        seatSelectionPanel.add(screenPanel, BorderLayout.NORTH);
        seatSelectionPanel.add(fullSeatsPanel, BorderLayout.CENTER);
        seatSelectionPanel.add(legendPanel, BorderLayout.SOUTH);
    }
    
    private void setupLegend() {
        legendPanel = new JPanel(new FlowLayout(FlowLayout.CENTER, 20, 10));
        legendPanel.setBackground(new Color(10, 10, 20));
        
        // Standard
        JPanel standardLegend = createLegendItem(STANDARD_COLOR, "Standard (₹280)");
        // Premium
        JPanel premiumLegend = createLegendItem(PREMIUM_COLOR, "Premium (₹350)");
        // VIP
        JPanel vipLegend = createLegendItem(VIP_COLOR, "VIP (₹400)");
        // Selected
        JPanel selectedLegend = createLegendItem(SELECTED_COLOR, "Selected");
        // Booked
        JPanel bookedLegend = createLegendItem(BOOKED_COLOR, "Booked");
        
        legendPanel.add(standardLegend);
        legendPanel.add(premiumLegend);
        legendPanel.add(vipLegend);
        legendPanel.add(selectedLegend);
        legendPanel.add(bookedLegend);
    }
    
    private JPanel createLegendItem(Color color, String text) {
        JPanel panel = new JPanel(new FlowLayout(FlowLayout.LEFT, 5, 0));
        panel.setBackground(new Color(10, 10, 20));
        
        JPanel colorBox = new JPanel();
        colorBox.setBackground(color);
        colorBox.setPreferredSize(new Dimension(20, 20));
        
        JLabel label = new JLabel(text);
        label.setForeground(Color.WHITE);
        
        panel.add(colorBox);
        panel.add(label);
        
        return panel;
    }
    
    private void setupBookingSummary() {
        summaryPanel = new JPanel();
        summaryPanel.setLayout(new BoxLayout(summaryPanel, BoxLayout.Y_AXIS));
        summaryPanel.setBackground(new Color(20, 25, 40));
        summaryPanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        summaryPanel.setPreferredSize(new Dimension(300, 0));
        
        // Booking Summary Title
        JLabel summaryTitle = new JLabel("Booking Summary");
        summaryTitle.setFont(new Font("Arial", Font.BOLD, 22));
        summaryTitle.setForeground(Color.WHITE);
        summaryTitle.setAlignmentX(Component.LEFT_ALIGNMENT);
        
        // Movie Section
        JLabel movieLabel = new JLabel("Movie");
        movieLabel.setFont(new Font("Arial", Font.PLAIN, 14));
        movieLabel.setForeground(Color.LIGHT_GRAY);
        movieLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
        
        JLabel movieName = new JLabel(selectedMovie);
        movieName.setFont(new Font("Arial", Font.BOLD, 18));
        movieName.setForeground(Color.WHITE);
        movieName.setAlignmentX(Component.LEFT_ALIGNMENT);
        
        // Theatre Section
        JLabel theatreLabel = new JLabel("Theatre");
        theatreLabel.setFont(new Font("Arial", Font.PLAIN, 14));
        theatreLabel.setForeground(Color.LIGHT_GRAY);
        theatreLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
        
        JLabel theatreName = new JLabel(selectedTheatre);
        theatreName.setFont(new Font("Arial", Font.BOLD, 18));
        theatreName.setForeground(Color.WHITE);
        theatreName.setAlignmentX(Component.LEFT_ALIGNMENT);
        
        // Date and Time Section
        JPanel dateTimePanel = new JPanel(new GridLayout(1, 2));
        dateTimePanel.setBackground(new Color(20, 25, 40));
        dateTimePanel.setAlignmentX(Component.LEFT_ALIGNMENT);
        dateTimePanel.setMaximumSize(new Dimension(300, 50));
        
        JPanel datePanel = new JPanel();
        datePanel.setLayout(new BoxLayout(datePanel, BoxLayout.Y_AXIS));
        datePanel.setBackground(new Color(20, 25, 40));
        
        JLabel dateLabel = new JLabel("Date");
        dateLabel.setFont(new Font("Arial", Font.PLAIN, 14));
        dateLabel.setForeground(Color.LIGHT_GRAY);
        dateLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
        
        JLabel dateValue = new JLabel(selectedDate);
        dateValue.setFont(new Font("Arial", Font.BOLD, 16));
        dateValue.setForeground(Color.WHITE);
        dateValue.setAlignmentX(Component.LEFT_ALIGNMENT);
        
        datePanel.add(dateLabel);
        datePanel.add(dateValue);
        
        JPanel timePanel = new JPanel();
        timePanel.setLayout(new BoxLayout(timePanel, BoxLayout.Y_AXIS));
        timePanel.setBackground(new Color(20, 25, 40));
        
        JLabel timeLabel = new JLabel("Time");
        timeLabel.setFont(new Font("Arial", Font.PLAIN, 14));
        timeLabel.setForeground(Color.LIGHT_GRAY);
        timeLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
        
        JLabel timeValue = new JLabel(selectedTime);
        timeValue.setFont(new Font("Arial", Font.BOLD, 16));
        timeValue.setForeground(Color.WHITE);
        timeValue.setAlignmentX(Component.LEFT_ALIGNMENT);
        
        timePanel.add(timeLabel);
        timePanel.add(timeValue);
        
        dateTimePanel.add(datePanel);
        dateTimePanel.add(timePanel);
        
        // Seats Section
        JLabel seatsLabel = new JLabel("Seats");
        seatsLabel.setFont(new Font("Arial", Font.PLAIN, 14));
        seatsLabel.setForeground(Color.LIGHT_GRAY);
        seatsLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
        
        JPanel seatsContainer = new JPanel(new FlowLayout(FlowLayout.LEFT, 5, 5));
        seatsContainer.setBackground(new Color(20, 25, 40));
        seatsContainer.setAlignmentX(Component.LEFT_ALIGNMENT);
        
        // Will be populated in updateBookingSummary()
        
        // Price Breakdown
        JPanel pricePanel = new JPanel(new GridLayout(3, 2));
        pricePanel.setBackground(new Color(20, 25, 40));
        pricePanel.setBorder(BorderFactory.createEmptyBorder(20, 0, 20, 0));
        pricePanel.setAlignmentX(Component.LEFT_ALIGNMENT);
        pricePanel.setMaximumSize(new Dimension(300, 100));
        
        JLabel subtotalLabel = new JLabel("Subtotal");
        subtotalLabel.setForeground(Color.LIGHT_GRAY);
        
        JLabel subtotalValue = new JLabel("₹0.00");
        subtotalValue.setForeground(Color.WHITE);
        subtotalValue.setHorizontalAlignment(SwingConstants.RIGHT);
        
        JLabel feeLabel = new JLabel("Convenience Fee");
        feeLabel.setForeground(Color.LIGHT_GRAY);
        
        JLabel feeValue = new JLabel("₹" + convenienceFee);
        feeValue.setForeground(Color.WHITE);
        feeValue.setHorizontalAlignment(SwingConstants.RIGHT);
        
        JLabel totalLabel = new JLabel("Total");
        totalLabel.setFont(new Font("Arial", Font.BOLD, 16));
        totalLabel.setForeground(Color.WHITE);
        
        JLabel totalValue = new JLabel("₹" + convenienceFee);
        totalValue.setFont(new Font("Arial", Font.BOLD, 16));
        totalValue.setForeground(Color.WHITE);
        totalValue.setHorizontalAlignment(SwingConstants.RIGHT);
        
        pricePanel.add(subtotalLabel);
        pricePanel.add(subtotalValue);
        pricePanel.add(feeLabel);
        pricePanel.add(feeValue);
        pricePanel.add(totalLabel);
        pricePanel.add(totalValue);
        
        // Confirm Button
        confirmBookingButton = new JButton("Confirm Booking");
        confirmBookingButton.setBackground(new Color(0, 123, 255));
        confirmBookingButton.setForeground(Color.WHITE);
        confirmBookingButton.setFont(new Font("Arial", Font.BOLD, 14));
        confirmBookingButton.setAlignmentX(Component.LEFT_ALIGNMENT);
        confirmBookingButton.setMaximumSize(new Dimension(300, 40));
        confirmBookingButton.setCursor(new Cursor(Cursor.HAND_CURSOR));
        confirmBookingButton.addActionListener(e -> processBooking());
        
        // Add all components to summary panel
        summaryPanel.add(summaryTitle);
        summaryPanel.add(Box.createRigidArea(new Dimension(0, 20)));
        summaryPanel.add(movieLabel);
        summaryPanel.add(movieName);
        summaryPanel.add(Box.createRigidArea(new Dimension(0, 15)));
        summaryPanel.add(theatreLabel);
        summaryPanel.add(theatreName);
        summaryPanel.add(Box.createRigidArea(new Dimension(0, 15)));
        summaryPanel.add(dateTimePanel);
        summaryPanel.add(Box.createRigidArea(new Dimension(0, 15)));
        summaryPanel.add(seatsLabel);
        summaryPanel.add(seatsContainer);
        summaryPanel.add(Box.createRigidArea(new Dimension(0, 10)));
        summaryPanel.add(pricePanel);
        summaryPanel.add(confirmBookingButton);
    }
    
    private void updateBookingSummary() {
        // Find the seats container
        Component[] components = summaryPanel.getComponents();
        JPanel seatsContainer = null;
        
        for (Component component : components) {
            if (component instanceof JPanel && ((JPanel) component).getLayout() instanceof FlowLayout) {
                seatsContainer = (JPanel) component;
                break;
            }
        }
        
        if (seatsContainer != null) {
            // Clear existing seat tags
            seatsContainer.removeAll();
            
            // Add new seat tags
            for (String seat : selectedSeats) {
                JPanel seatTag = new JPanel();
                seatTag.setBackground(new Color(40, 50, 80));
                seatTag.setBorder(BorderFactory.createEmptyBorder(5, 10, 5, 10));
                
                JLabel seatLabel = new JLabel(seat);
                seatLabel.setForeground(Color.WHITE);
                seatTag.add(seatLabel);
                
                seatsContainer.add(seatTag);
            }
            
            // Update price values
            calculatePrices();
            
            // Find and update price labels
            JPanel pricePanel = null;
            for (Component component : components) {
                if (component instanceof JPanel && ((JPanel) component).getLayout() instanceof GridLayout) {
                    pricePanel = (JPanel) component;
                    break;
                }
            }
            
            if (pricePanel != null) {
                Component[] priceComponents = pricePanel.getComponents();
                
                ((JLabel) priceComponents[1]).setText("₹" + String.format("%.2f", subtotal));
                ((JLabel) priceComponents[3]).setText("₹" + String.format("%.2f", convenienceFee));
                ((JLabel) priceComponents[5]).setText("₹" + String.format("%.2f", total));
            }
            
            // Refresh UI
            seatsContainer.revalidate();
            seatsContainer.repaint();
            summaryPanel.revalidate();
            summaryPanel.repaint();
        }
    }
    
    private void calculatePrices() {
        subtotal = 0.0;
        
        for (String seat : selectedSeats) {
            int col = Integer.parseInt(seat.substring(1));
            
            if (col >= 1 && col <= 3) {
                // VIP seats
                subtotal += VIP_PRICE;
            } else if (col >= 4 && col <= 9) {
                // Premium seats
                subtotal += PREMIUM_PRICE;
            } else {
                // Standard seats
                subtotal += STANDARD_PRICE;
            }
        }
        
        total = subtotal + convenienceFee;
    }
    
    private void processBooking() {
        if (selectedSeats.isEmpty()) {
            JOptionPane.showMessageDialog(this, "Please select at least one seat.", "No Seats Selected", JOptionPane.WARNING_MESSAGE);
            return;
        }
        
        // Create booking using backend
        boolean success = backend.createBooking(selectedMovie, selectedTheatre, selectedDate, selectedTime, selectedSeats, total);
        
        if (success) {
            JOptionPane.showMessageDialog(this, 
                "Booking Confirmed!\n\n" +
                "Movie: " + selectedMovie + "\n" +
                "Theatre: " + selectedTheatre + "\n" +
                "Date: " + selectedDate + "\n" +
                "Time: " + selectedTime + "\n" +
                "Seats: " + String.join(", ", selectedSeats) + "\n" +
                "Total Amount: ₹" + String.format("%.2f", total), 
                "Booking Successful", JOptionPane.INFORMATION_MESSAGE);
            
            // Reset seat selection
            resetSeatSelection();
        } else {
            JOptionPane.showMessageDialog(this, "Unable to complete booking. Please try again.", "Booking Failed", JOptionPane.ERROR_MESSAGE);
        }
    }
    
    private void resetSeatSelection() {
        // Reset selected seats
        selectedSeats.clear();
        
        // Reset prices
        subtotal = 0.0;
        total = convenienceFee;
        
        // Update UI
        updateBookingSummary();
        
        // Reset seat colors in selection panel
        resetSeatColors();
    }
    
    private void resetSeatColors() {
        // Find seat selection panel and reset colors
        Component[] components = seatSelectionPanel.getComponents();
        for (Component component : components) {
            if (component instanceof JPanel && component != screenPanel && component != legendPanel) {
                JPanel seatsPanel = (JPanel) component;
                Component center = ((BorderLayout) seatsPanel.getLayout()).getLayoutComponent(BorderLayout.CENTER);
                
                if (center instanceof JPanel) {
                    JPanel gridPanel = (JPanel) center;
                    Component[] seats = gridPanel.getComponents();
                    
                    for (Component seat : seats) {
                        if (seat instanceof JButton && seat.isEnabled()) {
                            JButton seatButton = (JButton) seat;
                            String text = seatButton.getText();
                            int col = Integer.parseInt(text);
                            
                            if (col >= 1 && col <= 3) {
                                seatButton.setBackground(VIP_COLOR);
                            } else if (col >= 4 && col <= 9) {
                                seatButton.setBackground(PREMIUM_COLOR);
                            } else {
                                seatButton.setBackground(STANDARD_COLOR);
                            }
                        }
                    }
                }
            }
        }
        
        seatSelectionPanel.revalidate();
        seatSelectionPanel.repaint();
    }
    
    public static void main(String[] args) {
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (ClassNotFoundException | InstantiationException | IllegalAccessException | UnsupportedLookAndFeelException e) {
            e.printStackTrace(); // Simplified exception handling
        }
        
        SwingUtilities.invokeLater(CineHubFrontend::new);
    }
}
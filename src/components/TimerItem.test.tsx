import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, vi, beforeEach, afterEach, expect } from 'vitest';
import { TimerItem } from '../components/TimerItem';
import { useTimerStore } from '../store/useTimerStore';
import { Timer } from '../types/timer';
import "@testing-library/jest-dom/vitest";

vi.mock('../store/useTimerStore', () => ({
  useTimerStore: vi.fn(),
}));

describe('TimerItem Component', () => {
  let mockStore: {
    toggleTimer: (id: string) => void;
    deleteTimer: (id: string) => void;
  };

  let timer: Timer;

  beforeEach(() => {
    timer = {
      id: '1',
      title: 'Test Timer',
      description: 'This is a test timer',
      duration: 60,
      remainingTime: 30,
      isRunning: false,
    };

    mockStore = {
      toggleTimer: vi.fn(),
      deleteTimer: vi.fn(),
    };

    useTimerStore.mockReturnValue(mockStore);
  });

  afterEach(() => {
    cleanup()
    vi.clearAllMocks();
  });

  it('renders timer title and description', () => {
    render(<TimerItem timer={timer} />);
    expect(screen.getByText('Test Timer')).toBeInTheDocument();
    expect(screen.getByText('This is a test timer')).toBeInTheDocument();
  });

  it('calls deleteTimer when delete button is clicked', () => {
    render(<TimerItem timer={timer} />);
    const button = screen.getByTitle('Delete Timer');
    fireEvent.click(button);
    expect(mockStore.deleteTimer).toHaveBeenCalledWith('1');
  });
});

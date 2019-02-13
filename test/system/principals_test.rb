require "application_system_test_case"

class PrincipalsTest < ApplicationSystemTestCase
  setup do
    @principal = principals(:one)
  end

  test "visiting the index" do
    visit principals_url
    assert_selector "h1", text: "Principals"
  end

  test "creating a Principal" do
    visit principals_url
    click_on "New Principal"

    fill_in "Firstname", with: @principal.firstName
    fill_in "Lastname", with: @principal.lastName
    click_on "Create Principal"

    assert_text "Principal was successfully created"
    click_on "Back"
  end

  test "updating a Principal" do
    visit principals_url
    click_on "Edit", match: :first

    fill_in "Firstname", with: @principal.firstName
    fill_in "Lastname", with: @principal.lastName
    click_on "Update Principal"

    assert_text "Principal was successfully updated"
    click_on "Back"
  end

  test "destroying a Principal" do
    visit principals_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Principal was successfully destroyed"
  end
end
